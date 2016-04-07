__author__ = 'ZhangXP'

import tornado.web
from tornado import gen
from controller.base import BaseHandler

class ZhxpTestHandler(BaseHandler):
	@tornado.web.asynchronous
	@gen.coroutine
	def get(self, *args, **kwargs):
		self.render("ZhxpTest.htm")


