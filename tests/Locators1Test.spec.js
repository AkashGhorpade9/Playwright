import { test, expect } from '@playwright/test'
test('Part 04 Links and Products Test', { tag: ['@03To05', '@03To10'] }, async ({ page }) => {

	await page.goto('https://www.demoblaze.com/index.html')

	//Links

	await page.waitForSelector('a')
	const links = await page.$$('a')

	let flag = false
	for (const link of links) {
		const textLinks = await link.textContent()
		console.log('textLinks: ', textLinks)

		if (textLinks.includes('Log in')) {
			flag = true
			break
		}
	}
	expect(flag).toBeTruthy()

	//Products

	await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
	const products = await page.$$("//div[@id='tbodyid']//div/h4/a")

	for (const product of products) {
		const textProduct = await product.textContent()
		console.log('textProduct: ', textProduct)

		if (textProduct.includes('Sony vaio i5')) {
			await product.click()
			break

		}
	}

	await expect(page.getByRole('heading', { name: 'Sony vaio i5' })).toBeVisible()

	await page.waitForTimeout(2000)
	await page.close()
})