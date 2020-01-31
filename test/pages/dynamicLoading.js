import basePage from "./basepage"

class dynamicLoading extends basePage {

    constructor() {
        super()

    }

    get startButton() {return $('//*[@id="start"]/button') 
    }
    get helloworldBanner() {return $('//*[@id="finish"]/h4')
}


}

export default new dynamicLoading()
