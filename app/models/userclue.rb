class Userclue < ApplicationRecord
  belongs_to :user
  belongs_to :clue

#   select clue_id,user_id, c.id AS ogclueid, myanswer, completed, c.question FROM userclues
# INNER JOIN clues AS c ON userclues.clue_id = c.id

def self.my_userclues(id)
  select("clue_id,user_id, c.id AS ogclueid, c.park_id AS park_id, myanswer, completed, c.question, c.answer AS correct_answer")
  .joins('INNER JOIN clues AS c ON userclues.clue_id = c.id')
  .where('user_id = ?', id)
end

end
