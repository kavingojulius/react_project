import './card.css'

const Card = () =>{

    const contacts = [
        {
          name: "Beyonce",
          age:20,
          phone: "+123 456 789",
          email: "b@beyonce.com"
        },
        {
          name: "Jack Bauer",
          age:25,
          phone: "+987 654 321",
          email: "jack@nowhere.com"
        },
        {
          name: "Chuck Norris",
          age:30,
          phone: "+918 372 574",
          email: "gmail@chucknorris.com"
        }
      ];
      
    return (
        <>
        {contacts.map((ex,index)=>(<div className="card"> 
            <div className="top">
                <h3>{ex.name}</h3>
                <p>{ex.age}</p>
            </div>     
            <div className="bottom">
                <p>{ex.phone}</p>
                <p>{ex.email}</p>
            </div>      
        </div>))}
        </>
        )
}

export default Card;