function Search(props) {
   return (
      <form>
         {props.children}<input type="text" onChange={props.onChange} value={props.value} />
      </form>
   );
}

export default Search;