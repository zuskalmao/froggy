# Frog Images

This directory contains the PNG images for the $FROGGY website:

- `frog-normal.png`: The regular frog image shown by default
- `frog-jumping.png`: The jumping frog image shown when a user clicks "LEAP NOW!"

## How to Add Your Own Images

1. Create your PNG images with a transparent background for best results
2. Name them according to their purpose (e.g., `frog-normal.png` and `frog-jumping.png`)
3. Place them in this directory
4. If you use different filenames, update the `imageUrl` and `alternateImageUrl` props in the relevant Frog components in `App.tsx`

## Image Requirements

- Recommended dimensions: Square format (e.g., 500x500 pixels)
- File format: PNG with transparency
- Style: Match the website's flat, cartoon aesthetic

## GitHub Upload Instructions

If you're uploading these images to GitHub:

1. Clone your repository locally
2. Add your PNG files to this directory
3. Commit and push the changes:
   ```
   git add public/images/frogs/*.png
   git commit -m "Add frog PNG images"
   git push
   ```

Note that large binary files might be subject to GitHub's file size limits. If your PNGs are very large, consider optimizing them before uploading.
