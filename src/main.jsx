import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: 'black', padding: '20px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
                I have challenged myself to build 5 different small tasks for 5 days.
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <li><Link to="/day1" style={{ textDecoration: 'none', color: 'blue', fontSize: '25px' }}>Day 1</Link></li>
                    <li><Link to="/day2" style={{ textDecoration: 'none', color: 'blue', fontSize: '25px' }}>Day 2</Link></li>
                    <li><Link to="/day3" style={{ textDecoration: 'none', color: 'blue', fontSize: '25px' }}>Day 3</Link></li>
                    <li><Link to="/day4" style={{ textDecoration: 'none', color: 'blue', fontSize: '25px' }}>Day 4</Link></li>
                    <li><Link to="/day5" style={{ textDecoration: 'none', color: 'blue', fontSize: '25px' }}>Day 5</Link></li>
                </ul>
            </nav>
        </div>
    )
}