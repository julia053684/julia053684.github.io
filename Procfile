# -t = min:max threads to use
# -w = no of workers to create
# So, -w 2 -t 16:16 will spawn 32 threads in total, 16 in each worker

web: bundle exec puma -t 8:32 -w 3 -p $PORT