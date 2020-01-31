import dynamicLoading from "../pages/dynamicLoading";



let helloworldBanner;

describe('button click test', () => {

    before(() => {
        browser.url('/dynamic_loading/1')
    });

    it('when I click', () => {
        dynamicLoading.startButton.waitForDisplayed()

        dynamicLoading.startButton.click()

    })


    it('after loading it should display helloworld', () => {

        dynamicLoading.helloworldBanner.waitForDisplayed()

        helloworldBanner =
            dynamicLoading.helloworldBanner.getText()

        helloworldBanner.should.include('Hello World!')


    });


});
