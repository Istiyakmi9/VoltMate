import subprocess

name = "Istiyak"

def run_command():
    command = "kc get pods"
    print("Running the ls command")
    ls_output = subprocess.check_output(command, shell=True, text=True)
    print(ls_output)


if __name__ == "__main__":
    run_command()