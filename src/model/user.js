class User {
    constructor({ user_id, email, hashed_password }) {
      this.user_id = user_id;
      this.email = email;
      this.hashed_password = hashed_password;
      this.first_name = '';
      this.dob_day = '';
      this.dob_month = '';
      this.dob_year = '';
      this.show_gender = '';
      this.gender_identity = '';
      this.gender_interest = '';
      this.url = '';
      this.about = '';
      this.matches = [];
    }
  }
  
  module.exports = { User };
  