#coding=utf-8
__author__ = 'zhangxa'

import tornado.web
from controller.base import BaseHandler
from tornado import gen
import pymongo
from bson.objectid import ObjectId
from util.function import time_span, intval
from model.user_answer import UserAnswerModel

"""
80后之旅游戏处理类
"""
class PlayGameHandler(BaseHandler):

    def get(self, *args, **kwargs): #game get入口
        #print("get self.ui",args,kwargs,self.ui)
        action = args[0] if len(args) else "index"
        method = "_view_%s" % action
        #print("method",method)
        arg = args[2] if len(args) == 3 else None
        if hasattr(self, method):
            #print("here", getattr(self, method))
            getattr(self, method)(arg)
        else:
            #print("_view_index")
            self._view_index(arg)

    @tornado.web.asynchronous
    @gen.coroutine
    def game_play_recored(self,id,col): #记录游戏被玩的次数
        #print("game recored id:",id)
        try:
            play_game = { "_id":id}
            result = yield self.db.games.update(play_game,{"$inc":{col:1}}) #加一次
        except:
            pass

    @tornado.web.asynchronous
    @gen.coroutine
    def game_play_recored_byIndex(self,index,col): #记录游戏通关的次数
        #print("game recored index:",index)
        try:
            #print("1")
            cursor = self.db.games.find()
            #print("2")
            #count = yield cursor.count()
            cursor.limit(1).skip(int(index))
            #print("3")
            games = yield cursor.to_list(1)
            #print("4")
            game = games[0]
            #print("game id",game["_id"],col)
            result = yield self.db.games.update({"_id":game['_id']},{"$inc":{col:1}}) #加一次
        except:
            pass

    @tornado.web.asynchronous
    @gen.coroutine
    def _view_index(self,arg): #play game游戏展示界面
        #print("fuck self.ui",self.ui)
        user_info = self.get_current_user()
        try:
            index = int(self.get_query_argument('index'))
        except:
            try:
                index = int(self.get_secure_cookie("cur_index")) #从cookie中尝试获取当前游戏索引
                print("cookie_index",index)
            except:
                index = -1

        def check_can_play(index,user):#未登陆和游客只能玩5道题目
            can_play = True
            if not user or user == "guest":
                if index >= 5:
                    can_play = False
            return can_play

        if user_info:
            username = user_info['username']
        else:
            username = None

        if username and username != "7324368best":
            if not check_can_play(index+1,username):
                self.set_secure_cookie("cur_index", str(index), expires_days = 30, httponly = True)
                self.custom_error("继续闯关需要注册或登录", jump="/register")

            if username and username != "guest":  #登陆用户,取上次题目
                user_answer = yield self.db.user_answer.find_one({"username":username},{"index":1})
                if user_answer: #记录过该用户的信息
                    index = user_answer['index']
                    index = int(index)

        #page = intval(args[1])
        #page = page if page > 1 else 1
        cursor = self.db.games.find()
        #count = yield cursor.count()
        cursor.limit(1).skip(index+1)
        games = yield cursor.to_list(1)
        if not games:
            self.custom_error("你已经答完了所有的题目!",jump="/")
        #print(index,games[0])
        game = games[0]
        if username and username != "7324368best":
            self.game_play_recored(game["_id"],"plays")
        self.render("playgame.htm", game = game, index = index+1)

    def post(self, *args, **kwargs):
		method = ("%s_action" % args[0]) if len(args) > 0 else "home_action"
		if hasattr(self, method):
			getattr(self, method)(*args, **kwargs)
		else:
			self.home_action(*args, **kwargs)

    @tornado.web.asynchronous
    @gen.coroutine
    def game_pass_honor(self,user,index): #记录用户过关信息并奖励
        if user and user != "guest": #是合法的登陆用户在玩,记录玩家游戏信息
            print("user ",user)
            user_answer = dict(
                username = user,
            )
            model = UserAnswerModel()#更新用户答题表
            if not model(user_answer):
                self.custom_error(model.error_msg)
            result = yield self.db.user_answer.update(user_answer,{"$set":{"index":index,"flag":1}},True) #记录用户答了几题
            honor_info = yield self.db.member.find_one(user_answer,{"game_honor":1})
            game_honor = honor_info['game_honor']
            cur_index = int(index)
            #print("game_honor",game_honor)
            if cur_index not in game_honor: #没有奖励过
                result = yield self.db.member.update(user_answer,{"$inc":{"money":5}})#奖励用户5金币
                result = yield self.db.member.update(user_answer,{"$addToSet":{"game_honor":cur_index}})#记录用户奖励过哪里题目

    @tornado.web.asynchronous
    @gen.coroutine
    def _view_gamepass(self, arg): #展示游戏结果胜利,参数1为游戏索引
        try:
            index = arg
            answer = self.get_query_argument('answer')
        except:
            self.custom_error("出错啦!")

        try: #获取当前用户名
            user_info = self.get_current_user()
            user = user_info["username"]
        except:
            user = None

        #print("self.ui",self.ui)
        #self.game_pass_honor(user,index)

        if user and user != "guest": #是合法的登陆用户在玩,记录玩家游戏信息
            print("user ",user)
            user_answer = dict(
                username = user,
            )
            model = UserAnswerModel()#更新用户答题表
            if not model(user_answer):
                self.custom_error(model.error_msg)
            result = yield self.db.user_answer.update(user_answer,{"$set":{"index":index,"flag":1}},True) #记录用户答了几题
            honor_info = yield self.db.member.find_one(user_answer,{"game_honor":1})
            try:
                game_honor = honor_info['game_honor']
            except:
                game_honor = []
            cur_index = int(index)
            #print("game_honor",game_honor)
            if cur_index not in game_honor or not game_honor: #没有奖励过
                result = yield self.db.member.update(user_answer,{"$inc":{"money":5}})#奖励用户5金币
                result = yield self.db.member.update(user_answer,{"$addToSet":{"game_honor":cur_index}})#记录用户奖励过哪里题目

        try:
            cursor = self.db.games.find()
            cursor.limit(1).skip(int(index))
            games = yield cursor.to_list(1)
            game = games[0]
            result = yield self.db.games.update({"_id":game['_id']},{"$inc":{"right_plays":1}}) #加一次

            if game['play_type'] == 0:
                right_answer_index = "answer%d"%(int(answer)+1)
                right_answer = game[right_answer_index]
            #print("right_answer",right_answer)
        except:
            pass
        #print("view_gamepass index",index)
        #print("answer",answer,self.ui)
        self.render("gamepass.htm",index=index,right_answer=right_answer)

    @tornado.web.asynchronous
    @gen.coroutine
    def _view_gamenopass(self, arg): #展示游戏结果失败,参数1为游戏索引
        try:
            index = arg
        except:
            self.custom_error("出错啦!")
        self.render("/gamenopass.htm",index=index)

    @tornado.web.asynchronous
    @gen.coroutine
    def gamecheck_action(self, *args, **kwargs): #检查游戏答案
        try:
            id = self.get_body_argument("id")
            index = int(self.get_body_argument("index"))
            answer = self.get_body_argument("answer")
            game = yield self.db.games.find({
                "_id": ObjectId(id)
            },)
            play_type = game['play_type']
            right_answer = game['right_answer']
        except:
            self.custom_error("出错啦!")
        #检查游戏结果
        def check_game_result(play_type,answer,right_answer):
            result = False
            if(0 == play_type): #select question
                if(int(answer) == int(right_answer)):
                    result = True
            return result

        result = check_game_result(play_type,answer,right_answer)
        self.redirect("/playgame/gamepass/%d" % index)