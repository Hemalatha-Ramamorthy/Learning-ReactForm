import React,{useState} from 'react'

export default function Learning() {
const [users,setUser]= useState('')
const [userdata,setUserdata]=useState([])
const [checkeditems, setCheckeditems]=useState({})
const handleAdd=(e)=>{
   e.preventDefault();
   if(users.trim()==='')return;
   setUserdata([...userdata,users])
   setUser('')
}
const handleChecked=(index, checked )=>{
   setCheckeditems({...checkeditems,[index]:checked})
}

  const handleDelete = (index) => {
    const updateddata=userdata.filter((_,i)=>i!==index)
    setUserdata(updateddata)
    // Remove the deleted item from checkedItems state
    const newCheckedItems = { ...checkeditems };
    delete newCheckedItems[index];
    setCheckeditems(newCheckedItems);
  };

  return (
    <> <input type='text' value={users} onChange={(e)=>setUser(e.target.value)}/>
   <button onClick={handleAdd} >Add</button>
   <ul>
  {userdata.map((user, index) => (
    <li key={index}>
      <input
        type="checkbox"
        checked={!!checkeditems[index]}
        onChange={(e) => handleChecked(index, e.target.checked)}
      />
      {user}
     <button 
     onClick={()=>handleDelete(index)}
     disabled={!checkeditems[index]}
     >Delete</button>
    </li>
  ))}
</ul>

   </>
  
  )
}
