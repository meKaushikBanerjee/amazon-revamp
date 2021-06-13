import React, { Component } from "react"; 
import { SearchIcon } from "@heroicons/react/outline";

class SearchItem extends React.Component {

    state = {
        title: this.props,
    }
    

    render(){
    <ul>
        {this.state.title.map(item => (
          <li key={item.id}>
            The person is {item.title} years old.
          </li>
        ))}
      </ul>
        return (
            <div className="flex sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" name="" id=""/>
                <SearchIcon className="h-12 p-4" />
            </div>
        )
    }
}

export default SearchItem;