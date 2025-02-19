import React from 'react';
import coverImg from './img/cover.jpeg';

function Cover() {
    return (
        <div className='place-items-center'>
            <img className='size-full' src={coverImg} alt='the picture of the restaurant'/>
            <div className='w-3/4'>
                <h2 className='text-amber-500 mt-10 text-center font-bold text-xl'>ABOUT US</h2>
                <h2 className='text-black text-center text-xl'>West Coast, Meet Italy</h2>
                <br></br>
                <p className='text-black'><b>The Farmhouse exists for the reason:</b> To bring people together; and we believe the best way to do that is over good wine and shared food. Osteria is an intimate, rustic Vancouver restaurant featuring Italian fare in a homey, comfortable space.</p>
                <br></br>
                <p className='text-black'>While Italian flavours brought us here, the bounty of the West Coast keeps us true to our roots. Growers, farmers, and foragers from across the valley stock our kitchen because, for us, the most honest ingredients come from the earth you stand on.</p>
                <br></br>
                <p className='text-black'><b>About our name:</b> The Farmhouse embodies who we are. Simple, rustic, and casual, everyone and anyone can find solace and company inside a Osteria. Comforting yet elevated, casual yet intimate, you can expect a dining experience that is somehow both familiar and fine at Osteria.</p>
                <br></br>
                <p className='text-black mb-10'><b>Our vision is simple:</b> bring British Columbia the cuisine and comfort we love from Italy. This restaurant is both an homage to our roots and a celebration of the place we now call home.</p>
            </div>
        </div> 
    )
    
}

export default Cover;