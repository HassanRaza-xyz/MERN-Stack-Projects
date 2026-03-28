function Button (props){
  return(
    <div>
    <button className="bg-black text-white transition-colors duration-700 px-8 py-2 hover:bg-orange-500 rounded-lg ">
        {props.button}
      </button>
    </div>
  )
}

export default Button

