from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

URL = "https://www.google.co.in"
chromeOptions = webdriver.ChromeOptions()
chromeOptions.add_argument('--incognito')
chromeOptions.add_argument('--headless')

driver = webdriver.Chrome(executable_path="C:\chromedriver.exe", options = chromeOptions)
driver.maximize_window()

def scrape_text(query):
    driver.get(URL)
    time.sleep(0.25)
    driver.find_element(By.XPATH, '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input').send_keys(query)
    time.sleep(0.25)
    driver.find_element(By.XPATH, '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input').send_keys(Keys.ENTER)
    time.sleep(0.5)

    page_source = driver.page_source.encode('utf8')
    soup = BeautifulSoup(page_source, 'lxml')

    overview = driver.find_element(By.XPATH, value='//*[@id="kp-wp-tab-overview"]/div[1]/div/div/div/div/div/div/div/div[1]/div/div').text
    causes = soup.find_all(class_ = 'm6vS6b PZPZlf', limit=1)
    selfTreat = soup.find_all(class_ = 'JXRj4e', limit=1)
    consult = soup.find_all(class_ = 'c0L1fd', limit=6)

    result = []
    print(overview)
    if len(overview) != 0:
        for each in overview:
            print(each.get_text().strip())
            result.append(each.get_text().strip())

    if len(causes) != 0:
        for each in causes:
            print(each.get_text().strip())
            result.append(each.get_text().strip())

    if len(selfTreat) != 0:
        for each in selfTreat:
            print(each.get_text().strip())
            result.append(each.get_text().strip())

    lst = []
    if len(consult) != 0:
        for each in consult:
            print(each.get_text().strip())
            lst.append(each.get_text().strip())
        result.append(lst)

res = scrape_text('headache')
for each in res:
    if type(each) != list:
        print(each)
    else:
        for _ in each:
            print(_)

    


