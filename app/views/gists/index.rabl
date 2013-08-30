collection @gists
attributes :title, :user_id, :id
child(:favorites) do
  attributes :user_id, :gist_id, :id
end