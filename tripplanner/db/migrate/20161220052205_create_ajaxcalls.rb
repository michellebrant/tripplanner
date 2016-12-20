class CreateAjaxcalls < ActiveRecord::Migration[5.0]
  def change
    create_table :ajaxcalls do |t|

      t.timestamps
    end
  end
end
