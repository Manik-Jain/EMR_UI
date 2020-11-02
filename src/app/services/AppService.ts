@Injectable({
    providedIn: 'root'
  })
  export class AppService {

    constructor() {

    }

    isAdmin() : Boolean {
        return true;
    }
  }