
import { test, expect } from '@playwright/test'
test('Part 08 Soft Assertions Test', { tag: ['@07To10','@03To10'] }, async ({ page }) => {

	await page.goto('https://demo.nopcommerce.com/register')

	//URL
	await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')

	//Title
	await expect.soft(page).toHaveTitle('nopCommerce demo store. Register')

	//Visible
	await expect.soft(page.getByAltText('nopCommerce demo store')).toBeVisible()

	//Enabled
	await expect.soft(page.getByRole('button', { name: 'SEARCH' })).toBeEnabled()

	//Checked
	await expect.soft(page.locator('#Newsletter')).toBeChecked()

	//Attribute
	await expect.soft(page.locator('#register-button')).toHaveAttribute('name', 'register-button')

	//Text
	await expect.soft(page.getByText('Your Password')).toHaveText('Your Password')

	//ContainText
	await expect.soft(page.getByText('Your Password')).toContainText('Password')

	//Value
	const val = page.locator('#Company')
	val.fill('Hari')
	await expect.soft(val).toHaveValue('Hari')

	//Count

	const count1 = page.locator('a')
	await expect.soft(count1).toHaveCount(62)

	const count = await page.$$('a')
	expect.soft(count.length).toBe(62)

	await page.waitForTimeout(2000)
	await page.close()
})