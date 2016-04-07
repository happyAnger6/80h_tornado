#coding=utf-8
__author__ = 'zhangxa'
import tornado.web, os, base64, pymongo, time
from controller.base import BaseHandler
from tornado import gen
from bson.objectid import ObjectId
from util.function import time_span, hash, intval
from model.user import UserModel

class ClassHandler(BaseHandler):
	def initialize(self):
		super(ClassHandler, self).initialize()
		self.topbar = ""

	def render(self, template_name, **kwargs):
		render = "class/%s" % template_name
		super(ClassHandler, self).render(render, **kwargs)

	def get(self, *args, **kwargs):
		method = "%s_act" % args[0]
		if len(args) == 3 : arg = args[2]
		else: arg = None
		if hasattr(self, method):
			getattr(self, method)(arg)
		else:
			self.detail_act()

	@tornado.web.asynchronous
	@gen.coroutine
	def detail_act(self, arg):
		user = self.current_user
		print("class user",user)
		self.render("class.htm")