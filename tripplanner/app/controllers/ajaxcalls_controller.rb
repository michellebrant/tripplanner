class AjaxcallsController < ApplicationController
  before_action :set_ajaxcall, only: [:show, :edit, :update, :destroy]

  # GET /ajaxcalls
  # GET /ajaxcalls.json
  def index


   #   getEvents = {}
   #  getEvents[:event] = HTTParty.get('http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future&app_key=bBnC2nhp4zqNBB4w')
   # render json: getEvents



  end
end
