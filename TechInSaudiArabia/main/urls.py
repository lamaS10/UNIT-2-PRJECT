from django.urls import path
from . import views



app_name = "main"


urlpatterns = [
    path("",views.home_view,name="home_view"),
    path("ai/",views.ai_view,name="ai_view"),
    path("digital/",views.digital_view,name="digital_view"),
    path("energy/",views.energy_view,name="energy_view"),
    path("neom/",views.neom_view,name="neom_view"),
    path("space/",views.space_view,name="space_view"),
    path("resources/",views.resources_view,name="resources_view"),
    path("contact/",views.contact_view,name="contact_view"),
    path("switch_mode/",views.switch_mode, name="switch_mode"),
      ]