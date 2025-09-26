import React, {useState} from 'react'

export default function About() {
    const [Mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid black'
    });

    const [butText, setbutText] = useState('Enable Dark Mode');

    const darkSwitch = () =>{
        if(butText == "Enable Dark Mode"){
            setMystyle({
            color: 'white',
            backgroundColor: 'black',
            border: '2px solid white'
            });

            setbutText('Enable Light Mode');
        }
        else{
            setMystyle({
            color: 'black',
            backgroundColor: 'white',
            border: '2px solid black'
            });

            setbutText('Enable Dark Mode');
        }
    }

  return (
    <div className="container my-3" style={Mystyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={Mystyle}>
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={Mystyle}>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={Mystyle}>
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        </div>
        </div>
        <div className="container my-3">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={darkSwitch} />
                <label className="form-check-label" htmlFor="switchCheckDefault">{butText}</label>
            </div>
        </div>
    </div>
  )
}
