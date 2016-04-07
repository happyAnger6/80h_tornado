#coding=utf-8
__author__ = 'zhangxa'

import tornado.web
from controller.base import BaseHandler
from tornado import gen
import pymongo
from bson.objectid import ObjectId
from util.function import time_span, intval

class Test1Handler(BaseHandler):

    @tornado.web.asynchronous
    @gen.coroutine
    def get(self, *args, **kwargs):
        limit = 1
        page = 2
        #page = intval(args[1])
        #page = page if page > 1 else 1
        cursor = self.db.games.find()
        count = yield cursor.count()
        cursor.limit(limit).skip((page - 1) * limit)
        games = yield cursor.to_list(limit)
        self.render("playgame.htm", game = games[0], count = count, each = limit, page = page)