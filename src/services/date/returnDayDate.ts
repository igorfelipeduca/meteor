class returnDayDate {
  public returnDay() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    return dd;
  }

  public returnMonth() {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    return mm;
  }

  public returnYear() {
    var today = new Date();
    var yyyy = today.getFullYear();
    return yyyy;
  }
}

export default new returnDayDate();
