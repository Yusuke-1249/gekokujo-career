import { test, expect } from '@playwright/test';

test.describe('LP フォーム機能テスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('シナリオ1: ヒーローとフォームが表示され、ステップ切替がアニメーションで動作する', async ({ page }) => {
    // ヒーローセクションが表示されていることを確認
    await expect(page.locator('h1')).toContainText('今より『稼げる仕事』へ');
    
    // フォームセクションへスクロール
    await page.getByRole('button', { name: '無料で転職相談' }).first().click();
    
    // フォームが表示されていることを確認
    await expect(page.locator('#form-section')).toBeVisible();
    
    // ステップ1が表示されていることを確認
    await expect(page.locator('h2')).toContainText('希望の勤務地を選択してください');
    
    // 勤務地を選択（自動で次のステップへ）
    await page.getByRole('button', { name: '大阪' }).click();
    
    // アニメーションが完了するのを待つ
    await page.waitForTimeout(400);
    
    // ステップ2が表示されていることを確認
    await expect(page.locator('h2')).toContainText('希望の職種を選択してください');
    
    // 進捗バーが更新されていることを確認
    const progressBar = page.locator('.bg-sun');
    const progressWidth = await progressBar.evaluate(el => el.style.width);
    expect(parseInt(progressWidth)).toBeGreaterThan(0);
  });

  test('シナリオ2: 学生選択時にブロックメッセージが表示される', async ({ page }) => {
    // フォームまでスクロール
    await page.getByRole('button', { name: '無料で転職相談' }).first().click();
    
    // ステップ5まで進む
    await page.getByRole('button', { name: '東京' }).click();
    await page.waitForTimeout(400);
    
    await page.getByRole('button', { name: '営業' }).click();
    await page.waitForTimeout(400);
    
    await page.getByRole('button', { name: '男性' }).click();
    await page.waitForTimeout(400);
    
    await page.getByRole('button', { name: 'できるだけ早く' }).click();
    await page.waitForTimeout(400);
    
    // 学生を選択
    await page.getByRole('button', { name: '学生' }).click();
    
    // ブロックメッセージが表示されることを確認
    await expect(page.locator('text=申し訳ございません')).toBeVisible();
    await expect(page.locator('text=現在、学生の方はサービス対象外となっております。')).toBeVisible();
  });

  test('シナリオ3: フォーム入力から送信まで（登録直前まで）', async ({ page }) => {
    // フォームまでスクロール
    await page.getByRole('button', { name: '無料で転職相談' }).first().click();
    
    // ステップ1: 勤務地
    await page.getByRole('button', { name: '神奈川' }).click();
    await page.waitForTimeout(400);
    
    // ステップ2: 職種
    await page.getByRole('button', { name: 'エンジニア' }).click();
    await page.waitForTimeout(400);
    
    // ステップ3: 性別
    await page.getByRole('button', { name: '女性' }).click();
    await page.waitForTimeout(400);
    
    // ステップ4: 開始時期
    await page.getByRole('button', { name: '1〜2ヶ月先' }).click();
    await page.waitForTimeout(400);
    
    // ステップ5: 就業状況
    await page.getByRole('button', { name: '正社員' }).click();
    await page.waitForTimeout(400);
    
    // ステップ6: 学歴
    await page.getByRole('button', { name: '大学卒業' }).click();
    await page.waitForTimeout(400);
    
    // ステップ7: 免許
    await page.getByRole('button', { name: 'はい' }).click();
    await page.waitForTimeout(400);
    
    // ステップ8: 名前と年齢
    await page.fill('input[placeholder="山田"]', '山田');
    await page.fill('input[placeholder="太郎"]', '太郎');
    await page.fill('input[placeholder="やまだ"]', 'やまだ');
    await page.fill('input[placeholder="たろう"]', 'たろう');
    await page.selectOption('select', '25');
    await page.getByRole('button', { name: '次へ進む' }).click();
    
    // ステップ9: 連絡先
    await page.fill('input[placeholder="example@email.com"]', 'test@example.com');
    await page.fill('input[placeholder="09012345678"]', '09012345678');
    await page.check('#agreement');
    
    // 送信ボタンが有効になっていることを確認
    const submitButton = page.getByRole('button', { name: '無料で転職相談する' });
    await expect(submitButton).toBeEnabled();
    
    // 進捗が100%になっていることを確認
    const progressBar = page.locator('.bg-sun');
    const progressWidth = await progressBar.evaluate(el => el.style.width);
    expect(progressWidth).toBe('100%');
  });

  test('モバイルでの表示とスクロール', async ({ page }) => {
    // ビューポートがモバイルサイズであることを確認
    const viewport = page.viewportSize();
    expect(viewport?.width).toBeLessThanOrEqual(500);
    
    // ヒーローセクションが表示されている
    await expect(page.locator('h1')).toBeVisible();
    
    // スクロールして各セクションが表示されることを確認
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // フッターが表示されている
    await expect(page.locator('text=© 2024 Apoial, Inc.')).toBeVisible();
    
    // 固定CTAボタンが表示されることを確認（フォームが画面外の時）
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(100);
    const fixedCTA = page.locator('text=無料で転職相談').last();
    await expect(fixedCTA).toBeVisible();
  });

  test('FAQアコーディオンの動作', async ({ page }) => {
    // FAQセクションまでスクロール
    await page.evaluate(() => {
      document.querySelector('h2:has-text("よくある質問")')?.scrollIntoView();
    });
    
    // 最初の質問をクリック
    const firstQuestion = page.locator('button').filter({ hasText: '転職サービスの料金はかかりますか？' });
    await firstQuestion.click();
    
    // 回答が表示されることを確認
    await expect(page.locator('text=完全無料でご利用いただけます')).toBeVisible();
    
    // もう一度クリックして閉じる
    await firstQuestion.click();
    await page.waitForTimeout(300);
    
    // 回答が非表示になることを確認
    await expect(page.locator('text=完全無料でご利用いただけます')).not.toBeVisible();
  });
});