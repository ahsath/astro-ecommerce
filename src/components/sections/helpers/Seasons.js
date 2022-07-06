export default class Seasons {
  static get currentSeason() {
    const today = new Date()

    switch (today.getMonth()) {
      case 11:
      case 0:
      case 1:
        return 'Inverno'

      case 2:
      case 3:
      case 4:
        return 'Primavera'

      case 5:
      case 6:
      case 7:
        return 'Verao'

      case 8:
      case 9:
      case 10:
        return 'Outono'
    }
  }
}