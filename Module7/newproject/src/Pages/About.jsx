import Counter from '../components/Counter'
import Bomb from '../components/ExplodingBomb'

function About() {

    return (
        <div className="About">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis lobortis est, id ornare elit rutrum et.
                Nulla bibendum hendrerit dolor eget egestas. Nunc sit amet ante id ante rutrum rutrum ut ut turpis. 
                Morbi molestie fermentum vulputate. Vestibulum eget felis ut lacus elementum sagittis. 
                Curabitur ornare velit sit amet est laoreet placerat. Donec egestas consectetur diam ac porttitor. Ut nec posuere mi, quis fringilla nisl.
                </p>
                <Counter />
                <ExplodingBomb/>
        </div>
    )
}


export default About