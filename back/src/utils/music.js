function filterAuth(filters){
        [minTempo,maxTempo]=filters.Tempo
        [minDanceability,maxDanceability]=filters.Danceability
        [minYear,maxYear]=filters.Year
        [minEnergy,maxEnergy]=filters.Year
        const TempoMax=126.0
        const DnceMax=1.0
        const YearMax=2020
        const EneryMax=1.0
        const TempoMin=110.0
        const DnceMin=0.62
        const YearMin=2014
        const EneryMin=0.7

        if(minTempo<TempoMin || maxTempo>TempoMax){
            return false
        }
        if(minDanceability<DnceMin || maxDanceability>DnceMax){
            return false
        }
        if(minYear<YearMin || maxYear>YearMax){
            return false
        }
        if(minEnergy<EneryMin || maxEnergy>EneryMax){
            return false
        }
        return true
}

