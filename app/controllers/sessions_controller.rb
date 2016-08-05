class SessionsController < ApplicationController
  def login_page
  end
  
  def login
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user 
      redirect_to user
    else
      flash.now[:danger] = 'Invalid email/passowrd combination'
      render 'new'
    end
  end
  
  def logout
  end
end
