class UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    #debugger
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to Dyer's app!"
      redirect_to @user
    else
      render 'new'
    end
  end
  
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

  def home
  end
  def help
  end
  def about
  end
  def contact
  end
  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
    
    
    
end

