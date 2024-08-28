import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import { MdOutlineDomainVerification,MdOutlineBallot,MdOutlinePendingActions } from "react-icons/md";
const Header = () => {
  const todos = useSelector((state) => state.todos);
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const remainingCount = totalCount - completedCount;

  return (
    <header className="header">
      <h1 style={{color:'white'}}>Todo List</h1>
      <div className="badges">
        <div className="badge total">
          <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <MdOutlineBallot size={30}/>
            {totalCount}
          </span>
        </div>

        <div className="badge completed">
          <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <MdOutlineDomainVerification size={30}/>
            {completedCount}
          </span>
        </div>

        <div className="badge remaining">
          <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <MdOutlinePendingActions size={30}/>
            {remainingCount}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
