function Button(props) {
   return (
      <button onClick={props.onClick} className={props.className} type="button">
         {props.children}
      </button>
   );
}

export default Button;