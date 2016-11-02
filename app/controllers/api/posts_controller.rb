class Api::PostsController < ApplicationController

  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Post.all.order(created_at: :desc)
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    post = Post.new(post_params)
    post.user_id = current_user.id
    if post.save
      render json: post
    else
      render json: { error: post.errors.full_messages.to_sentence }
    end
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: post
    else
      render json: { error: post.errors.full_messages.to_sentence }
    end
  end

  def destroy
    post = Post.find(params[:id])
    title = post.title
    if post.destroy
      render json: { post: "#{title} has been deleted!"}
    else
      render json: { error: post.errors.full_messages.to_sentence }
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :title)
  end

end
