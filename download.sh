# Create a directory to store the downloaded images
mkdir images

# Use a loop to download each image individually
for i in {1..604}; do
  # Pad the number with zeros to get three digits
  padded_number=$(printf "%03d" $i)

  # Use curl to download the image
  curl -O "https://media.qurankemenag.net/khat2/QK_${padded_number}.webp" -s

  # Move the downloaded image to the images directory
  mv "QK_${padded_number}.webp" images/
done
