def on_button_pressed_a():
    basic.show_string("")
input.on_button_pressed(Button.A, on_button_pressed_a)


def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("The parking lot is empty!")