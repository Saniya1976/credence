import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'

const Home = () => {
    const loggedIn = { username: 'Sanya' }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome '
                        user={loggedIn?.username || 'Guest'}
                        subtitle='We are glad to have you here. Explore our services and enjoy a seamless banking experience.'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={12500.0}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home
