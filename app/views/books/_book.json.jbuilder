json.extract! book, :id, :name, :author, :price, :category, :created_at, :updated_at
json.url book_url(book, format: :json)
