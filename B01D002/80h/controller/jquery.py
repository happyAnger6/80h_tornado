#coding=utf-8
__author__ = 'zhangxa'

import tornado.web
from controller.base import BaseHandler
from tornado import gen
import pymongo
from bson.objectid import ObjectId
from util.function import time_span, intval

class JqueryHandler(BaseHandler):

    def get(self, *args, **kwargs):
        print("JqueryHandler get !")
        self.render("jquery_test.htm")