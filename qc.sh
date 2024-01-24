echo "What is your commit message"
read commitMessage
cd c/Desktop/Coffee_Shop_project geng-geng/BMS_project
git add .
git commit -m "${commitMessage}"
git push origin main
