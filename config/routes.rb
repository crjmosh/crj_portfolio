Rails.application.routes.draw do
  root 'home#index'

  get '/portfolio', to: 'home#portfolio'
  get '/contact', to: 'home#contact'

end
