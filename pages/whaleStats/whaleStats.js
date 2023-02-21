import Header from "../../components/Header";
import WhaleStatsHeader from "../../components/WhaleStatsTable/WhaleStatsHeader"

const WhaleStats = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="mt-10"/>
            <WhaleStatsHeader />
        </div>
    )
}

export default WhaleStats