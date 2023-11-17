/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IBook {
 title: string,
}
class Component <T extends IBook>{
  constructor (public props:T) {

  }
}

class Page extends Component<IBook> {
  pageInfo (): void {
    console.log(this.props.title);
  }
}

export { };

