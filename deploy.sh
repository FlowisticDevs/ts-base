if [ -d build ]; then 
  echo 'Checking for backups...'

  backup_dir="backup/$(date '+%Y-%m-%d-%H-%M')/"

  echo "Moving build files to backup directory..."
  mkdir -p "${backup_dir}"
  mv -v build/* "${backup_dir}"

  echo 'Done!' 
fi

echo 'Compiling typescript...' 
tsc --build

echo 'Done!'
