SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :gists

  root :to => "roots#index"
end
