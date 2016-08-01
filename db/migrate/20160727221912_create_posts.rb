class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, :null => false, index: true
      t.string :title
      t.string :content, :null => false
      t.timestamps null: false
    end
  end
end
