class HotelsController < ApplicationController

skip_before_action  :verify_authenticity_token
  def show
    @ID = params[:id]
    @ID2 = @ID.split(' ')
    @hotelname = @ID2[0]
    @hotelname2 = @hotelname.split /(?=[A-Z])/
    @hotelname3 = @hotelname2.join(' ')
    @address = @ID2[1]
    @address2 = @address.split /(?=[A-Z])/
    @address3 = @address2.join(' ')
    @rate = @ID2[2].gsub('P', '.')
    @phone = @ID2[3]

  end

  def create
    Hotel.create(name: params[:name],
                  address: params[:address],
                  rate: params[:rate],
                  phone: params[:phone])
                redirect_to "/trips"
  end


end




