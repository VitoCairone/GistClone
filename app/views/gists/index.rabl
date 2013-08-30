collection @gists
attributes :title, :user_id, :id
child(:favorites) do
  attributes :user_id, :gist_id, :id
end
child(:gist_files) do
  attributes :name, :body, :gist_id, :id
end