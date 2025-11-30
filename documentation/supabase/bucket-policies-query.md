-- ============================================
-- Storage Policies for organization-assets
-- ============================================

-- Allow anyone to read organization assets (logos are public)
CREATE POLICY "Public can view organization assets"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'organization-assets');

-- Allow anyone to insert (for now - you can restrict later)
CREATE POLICY "Allow uploads to organization-assets"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'organization-assets');

-- Allow anyone to update
CREATE POLICY "Allow updates to organization-assets"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'organization-assets');

-- Allow anyone to delete
CREATE POLICY "Allow deletes from organization-assets"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'organization-assets');

-- ============================================
-- Storage Policies for employee-profiles
-- ============================================

-- Allow anyone to read employee profiles (for now)
CREATE POLICY "Public can view employee profiles"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'employee-profiles');

-- Allow anyone to insert
CREATE POLICY "Allow uploads to employee-profiles"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'employee-profiles');

-- Allow anyone to update
CREATE POLICY "Allow updates to employee-profiles"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'employee-profiles');

-- Allow anyone to delete
CREATE POLICY "Allow deletes from employee-profiles"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'employee-profiles');


-- ============================================
-- Storage Policies for leave-attachments
-- ============================================

-- Allow anyone to read leave attachments (for now)
CREATE POLICY "Public can view leave attachments"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'leave-attachments');

-- Allow anyone to insert
CREATE POLICY "Allow uploads to leave-attachments"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'leave-attachments');

-- Allow anyone to update
CREATE POLICY "Allow updates to leave-attachments"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'leave-attachments');

-- Allow anyone to delete
CREATE POLICY "Allow deletes from leave-attachments"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'leave-attachments');


-- ============================================
-- Storage Policies for petty-cash-attachments
-- ============================================

-- Allow anyone to read petty-cash attachments
CREATE POLICY "Public can view petty cash attachments"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'petty-cash-attachments');

-- Allow anyone to insert (uploads)
CREATE POLICY "Allow uploads to petty-cash-attachments"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'petty-cash-attachments');

-- Allow anyone to update
CREATE POLICY "Allow updates to petty-cash-attachments"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'petty-cash-attachments');

-- Allow anyone to delete
CREATE POLICY "Allow deletes from petty-cash-attachments"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'petty-cash-attachments');