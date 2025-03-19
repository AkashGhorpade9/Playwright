
import { test, expect } from '@playwright/test'
test('Part 07 Assertions Test', { tag: ['@07To10','@03To10'] }, async ({ page }) => {

	await page.goto('https://demo.nopcommerce.com/register')

	//URL
	await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

	//Title
	await expect(page).toHaveTitle('nopCommerce demo store. Register')

	//Visible
	await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

	//Enabled
	await expect(page.getByRole('button', { name: 'SEARCH' })).toBeEnabled()

	//Checked
	await expect(page.locator('#Newsletter')).toBeChecked()

	//Attribute
	await expect(page.locator('#register-button')).toHaveAttribute('name', 'register-button')

	//Text
	await expect(page.getByText('Your Password')).toHaveText('Your Password')

	//ContainText
	await expect(page.getByText('Your Password')).toContainText('Password')

	//Value
	const val = page.locator('#Company')
	val.fill('Hari')
	await expect(val).toHaveValue('Hari')

	//Count

	const count1 = page.locator('a')
	await expect(count1).toHaveCount(62)

	const count = await page.$$('a')
	expect(count.length).toBe(62)

	await page.waitForTimeout(2000)
	await page.close()
})