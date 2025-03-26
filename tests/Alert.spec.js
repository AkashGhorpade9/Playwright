import { test, expect } from '@playwright/test'
test.describe.configure({ mode: 'parallel' })  //serial
// alert
// confirm
// prompt


test('Part 16 alert Test', { tag: ['@16To20', '@11To20'] }, async ({ page }) => {

	await page.goto('https://testautomationpractice.blogspot.com/')

	page.on('dialog', async dialog => {
		expect(dialog.type()).toContain('alert')
		expect(dialog.message()).toContain('I am an alert box!')
		await dialog.accept()
	})

	await page.click('#alertBtn')

	await page.waitForTimeout(2000)
	await page.close()
})

test('Part 16 confirm Test', { tag: ['@11To20', '@16To20'] }, async ({ page }) => {

	await page.goto('https://testautomationpractice.blogspot.com/')

	page.on('dialog', async dialog => {
		expect(dialog.type()).toContain('confirm')
		expect(dialog.message()).toContain('Press a button!')

		await dialog.accept()
		//await dialog.dismiss()
	})

	await page.click('#confirmBtn')
	await expect(page.locator('#demo')).toHaveText('You pressed OK!')

	await page.waitForTimeout(2000)
	await page.close()
})

test('Part 16 prompt Test', { tag: ['@11To20', '@16To20'] }, async ({ page }) => {

	await page.goto('https://testautomationpractice.blogspot.com/')
	page.on('dialog', async dialog => {

		expect(dialog.type()).toContain('prompt')
		expect(dialog.message()).toContain('Please enter your name:')
		expect(dialog.defaultValue()).toContain('Harry Potter')
		await dialog.accept('HARI')
	})

	await page.click('#promptBtn')
	await expect(page.locator('#demo')).toContainText('HARI')

	await page.waitForTimeout(2000)
	await page.close()
})